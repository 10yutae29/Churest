package com.ssafy.churest.entity;

import com.ssafy.churest.dto.req.BoardRequestDto;
import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int boardId;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @NotNull
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tree_id")
    private Tree tree;

    @NotNull
    @OneToMany(mappedBy = "board")
    private List<TreeLog> treeLogs = new ArrayList<>();

    @Column(length = 20)
    private String title;

    @Column(length = 140)
    private String content;

    @CreationTimestamp
    private LocalDate createdTime;

    @Column(length = 5)
    private String weather;

    @ColumnDefault("false")
    private boolean isDeleted;

    @ColumnDefault("false")
    private boolean isPayed;

    @Builder
    public Board(Member member, Tree tree, String title, String content, String weather, LocalDate createdTime){
        this.member = member;
        this.tree = tree;
        this.title = title;
        this.content = content;
        this.weather = weather;
        this.createdTime = createdTime;
    }

    public Board updatePayed(boolean isPayed){
        this.isPayed = isPayed;
        return this;
    }
}
