package com.ssafy.churest.dto.resp;

import lombok.Builder;

import java.util.List;

public class ForestResponseDto {

    @Builder
    public static class ForestInfo {

        private int avatarId;

        private int birdId;

        private String birdNickname;

        private int houseId;

        private int birdHouseId;

        private int coin;

        private List<BoardResponseDto.BoardInfo> treeList;
    }
}
