import Image from 'next/image';
import { images } from '@/public/assets/images';
import Carousel from '../common/Carousel';
import { getMyInfo } from '@/apis/mypage';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import NickName from './NickName';
import { useRecoilValue } from 'recoil';
import { loginAtom } from '@/atoms/login';

type Props = {
  myPageId: number;
};
type MyPageInfo = {
  member: { memberId: number; nickname: string; avatarId: number };
  boards: [];
};

export default function MyPage({ myPageId }: Props) {
  const cardType = 'mypage';
  const [nickname, setNickname] = useState('');
  const handleNickname = (e: any) => {
    setNickname(e.target.value);
  };
  const token = useRecoilValue(loginAtom).accessToken;
  const { data, refetch } = useQuery(
    'mypage',
    () => getMyInfo(token, Number(myPageId)),
    {
      onSuccess(data) {
        setNickname(data.data.member.nickname);
      },
    }
  );
  console.log(data?.data);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <div>
        <div className="blue-clay mypage-container">
          <div className="modal-title">
            <Image
              src={images.mypage_navbar_img}
              width={35}
              height={35}
              alt=""
            />{' '}
            마이페이지
          </div>
          <div className="mypage-content-box">
            <div className="avatar-box">
              {/* <div className="inside-circle center"> */}
              <div className="center">
                <Image
                  src={images['avatar_' + data?.data.member.avatarId + '_img']}
                  alt=""
                  width={100}
                  height={160}
                />
              </div>
              <div className="nickname-box">
                <NickName
                  handleNickname={handleNickname}
                  nickname={nickname}
                  refetch={refetch}
                  myPageId={myPageId}
                ></NickName>
              </div>
            </div>
            <div className="mine">
              {data?.data.boards.length == 0 ? (
                <div className="alarm-text">
                  <p>
                    추억이 아직 없습니다.<br></br>츄리를 심어보세요!
                  </p>
                </div>
              ) : (
                <div className="memory-container">
                  <div className="memory-title">추억 모아보기</div>
                  <Carousel
                    cardType={cardType}
                    info={data?.data.boards && data.data.boards}
                  ></Carousel>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .mypage-container {
            width: 650px;
            height: 480px;
            overflow-x: hidden;
            overflow-y: auto;
            z-index: 50;
          }
          .mine {
            width: 370px;
            justify-content: center;
            align-items: center;
          }
          .tree-img {
            margin: 0 auto;
          }
          .memory-title {
            text-align: center;
            line-height: 30px;
            font-size: 18px;
            font-weight: bold;
          }
          .memory-container {
            display: flex;
            flex-direction: column;
            justify-items: center;
            width: 100%;
            height: 380px;
          }
          .mypage-content-box {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 340px;
          }
          .nickname-box {
            justify-content: center;
            align-items: center;
            gap: 15px;
            margin-top: 30px;
          }
          .avatar-box {
          }
          .alarm-text {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 20px;
            line-height: 40px;
            color: gray;
          }
        `}
      </style>
    </>
  );
}
