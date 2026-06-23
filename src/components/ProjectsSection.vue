<template>
    <div class="projects" id="projects">
        <div class="projects-heading">
            <p class="label">作品集</p>
            <p class="big-title">PROJECTS</p>
        </div>
        <div class="cards-wrapper">
            <PortfolioCard v-for="card in cards" :key="card.title" :card="card" />
        </div>
    </div>
</template>

<script setup>
import PortfolioCard from './PortfolioCard.vue'

const cards = [
    {
        img: 'https://raw.githubusercontent.com/hexschool/HTMLHWSource/master/singlePage/banner.png',
        date: 'May, 2026',
        tags: '前端切版・網頁設計',
        title: '網頁切版',
        desc: '依據設計稿完成切版，實作差異列表、聯絡表單',
        link: 'https://suyangalex.github.io/Suyang-Portfolio/'
    },
    {
        img: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_1.png?raw=true',
        date: 'April, 2025',
        tags: 'Flex切版・前端切版',
        title: 'Flex切版',
        desc: '依據設計稿完成切版，實作選單、Flex排版、頁碼選項',
        link: 'https://suyangalex.github.io/homework_3/'
    }
]
</script>