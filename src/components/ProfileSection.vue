<template>
    <div class="profile">
            <div class="profile_text">
                <p class="eng">Hello<br>I'm Suyang</p>
                <p class="ch">
                    畢業於臺灣大學 生物產業傳播暨發展學系<br>
                    前端程式語言目前自學一年多，目標轉職前端工程師<br>
                    喜歡把美學和程式結合，打造一個又一個精美的網頁設計！
                </p>
                <div class="contact_resume">
                    <a href="#" @click.prevent="$emit('open-modal')">與我聯絡</a>
                    <a href="https://www.cake.me/pu9730251" target="_blank">我的履歷</a>
                </div>
            </div>
            <img
                class="profile_img"
                src="https://github.com/SuyangAlex/Suyang-Portfolio/blob/main/img/handsome.jpg?raw=true"
                alt="個人照"
            >
    </div>
</template>

<script setup>
    defineEmits(['open-modal'])
</script>