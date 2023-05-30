import { loginAtom } from '@/atoms/login';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Swal from 'sweetalert2';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { useEffect, useState } from 'react';
import { updateFcm } from '@/apis/mypage';
import { useMutation } from 'react-query';

export default function AlarmRoot() {
  const setFcm = useSetRecoilState(loginAtom);
  const onMessageFCM = async () => {
    // 브라우저에 알림 권한을 요청합니다.
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') return;

    // 이곳에도 아까 위에서 앱 등록할때 받은 'firebaseConfig' 값을 넣어주세요.
    const firebaseConfig = {
       apiKey: process.env.NEXT_PUBLIC_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_ID,
      appId: process.env.NEXT_PUBLIC_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID, 
    };

    const app = initializeApp(firebaseConfig);

    const messaging = getMessaging(app);

    // 이곳 vapidKey 값으로 아까 토큰에서 사용한다고 했던 인증서 키 값을 넣어주세요.
    getToken(messaging, {
      vapidKey:
        process.env.NEXT_PUBLIC_VAPID_KEY,
    })
      .then((currentToken) => {
        if (currentToken) {
          // 정상적으로 토큰이 발급되면 콘솔에 출력합니다.

          setFcm((prev) => {
            return { ...prev, fcmToken: currentToken };
          });
        } else {
        }
      })
      .catch((err) => {});

    // 메세지가 수신되면 역시 콘솔에 출력합니다.
    onMessage(messaging, (payload) => {
      const noti: any = payload.notification;
      if (payload.notification) {
        Swal.fire({
          position: 'center',
          imageUrl:
            'https://storage.googleapis.com/churest-bucket/project_image/alarm_navbar_img.png',
          title: '알림이 도착했어요!',
          text: noti.title,
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  useEffect(() => {
    onMessageFCM();
  }, []);

  return <></>;
}
