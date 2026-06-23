<template>
    <div class="service">
        <p class="titleF">技能</p>
        <p class="titleS">SKILL</p>
        <div class="skills">
            <div class="skill">
                <p class="second_line">前端切版</p>
                <p>使用 HTML、CSS、JavaScript 將設計稿還原為精準的網頁，注重細節與互動體驗。</p>
            </div>
            <div class="skill">
                <p class="second_line">網頁設計</p>
                <p>結合美學與使用者體驗，設計兼具視覺吸引力與易用性的介面。</p>
            </div>
            <div class="skill">
                <p class="second_line">專案管理</p>
                <p>跨部門溝通協調，追蹤專案進度與里程碑，確保產品如期上線。</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const skills = [
    {
        title: '前端切版',
        desc: '使用 HTML、CSS、JavaScript 將設計稿還原為精準的網頁，注重細節與互動體驗。'
    },
    {
        title: '網頁設計',
        desc: '結合美學與使用者體驗，設計兼具視覺吸引力與易用性的介面。'
    },
    {
        title: '專案管理',
        desc: '跨部門溝通協調，追蹤專案進度與里程碑，確保產品如期上線。'
    }
]
</script>