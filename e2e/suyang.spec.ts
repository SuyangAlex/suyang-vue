import { test, expect } from '@playwright/test'

// --- 導覽列 ---
test('導覽列顯示名字和連結', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('.name')).toHaveText('Suyang')
  await expect(page.locator('a[href="#projects"]')).toHaveText('作品集')
  await expect(page.locator('a[href="https://github.com/SuyangAlex"]')).toHaveText('Github')
})

// --- 聯絡表單：驗證 ---
test('表單空白送出會顯示錯誤訊息', async ({ page }) => {
  await page.goto('/')

  // 開啟 Modal
  await page.click('a:has-text("與我聯絡")')
  await expect(page.locator('.modal')).toBeVisible()

  // 直接送出（不填任何欄位）
  await page.click('.btn-send')

  await expect(page.locator('.form-error')).toHaveText('請填寫你的姓名')
})

// --- 聯絡表單：填寫完整 mock 送出 ---
test('表單填寫完整後顯示成功畫面', async ({ page }) => {
  // mock EmailJS，避免真的發信
  await page.route('https://api.emailjs.com/**', route => route.fulfill({
    status: 200,
    body: JSON.stringify({ status: 200, text: 'OK' })
  }))

  await page.goto('/')
  await page.click('a:has-text("與我聯絡")')

  await page.fill('#inputName', 'Suyang')
  await page.fill('#inputEmail', 'test@example.com')
  await page.fill('#inputMessage', '這是自動化測試訊息')

  await page.click('.btn-send')

  await expect(page.locator('.success-title')).toHaveText('訊息已送出！')
})