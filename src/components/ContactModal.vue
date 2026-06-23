<template>
    <div class="modal-overlay" :class="{ active: isOpen }" :aria-hidden="!isOpen" @click.self="$emit('close')">
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
            <button class="modal-close" @click="$emit('close')" aria-label="關閉">✕</button>

            <!-- Form View -->
            <div v-if="!submitted">
                <h2 class="modal-title" id="modalTitle">與我聯絡</h2>
                <p class="modal-sub">有任何合作提案或問題，都歡迎留言，<br>我會盡快回覆你！</p>

                <div class="form-group">
                    <label for="inputName">姓名</label>
                    <input type="text" id="inputName" v-model="form.name" placeholder="你的名字">
                </div>
                <div class="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="email" id="inputEmail" v-model="form.email" placeholder="your@email.com">
                </div>
                <div class="form-group">
                    <label for="inputMessage">訊息</label>
                    <textarea id="inputMessage" v-model="form.message" rows="4" placeholder="想聊什麼都可以說..."></textarea>
                </div>

                <p class="form-error">{{ errorMsg }}</p>
                <button class="btn-send" @click="handleSend" :disabled="sending">
                    {{ sending ? '傳送中...' : '送出訊息' }}
                </button>
            </div>

            <!-- Success View -->
            <div v-else class="success-view">
                <div class="success-icon">✓</div>
                <p class="success-title">訊息已送出！</p>
                <p class="success-sub">謝謝你的來信，<br>我通常會在 1–2 個工作天內回覆。</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['isOpen'])
const emit = defineEmits(['close'])

const form = ref({ name: '', email: '', message: '' })
const errorMsg = ref('')
const sending = ref(false)
const submitted = ref(false)

// 關閉時重置
watch(() => props.isOpen, (val) => {
    if (!val) {
        setTimeout(() => {
            form.value = { name: '', email: '', message: '' }
            errorMsg.value = ''
            sending.value = false
            submitted.value = false
        }, 280)
    }
})

function validate() {
    if (!form.value.name.trim()) {
        errorMsg.value = '請填寫你的姓名'
        return false
    }
    if (!form.value.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
        errorMsg.value = '請填寫有效的 Email'
        return false
    }
    if (!form.value.message.trim()) {
        errorMsg.value = '請填寫訊息內容'
        return false
    }
    errorMsg.value = ''
    return true
}

async function handleSend() {
    if (!validate()) return

    sending.value = true
    try {
        await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.value.name,
                reply_to: form.value.email,
                message: form.value.message
            }
        )
        submitted.value = true
    } catch (err) {
        console.error('EmailJS error:', err)
        errorMsg.value = '傳送失敗，請稍後再試或直接寄信給我。'
    } finally {
        sending.value = false
    }
}
</script>