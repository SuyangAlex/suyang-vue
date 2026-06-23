<template>
    <div class="portfolio-card">
        <img class="card-bg" :src="card.img" :alt="card.title">
        <div class="card-overlay">
            <p class="card-date">{{ card.date }}</p>
            <p class="card-tags">{{ card.tags }}</p>
            <h2 class="card-title">{{ card.title }}</h2>
            <p class="card-desc">{{ card.desc }}</p>
            <a class="card-btn" :href="card.link" target="_blank">前往作品</a>
        </div>
    </div> 
</template>

<script setup>
    defineProps(['card'])
</script>