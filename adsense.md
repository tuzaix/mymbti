# Google AdSense 启用与配置指南

本项目已经集成了 AdSense 广告位占位符。按照以下步骤操作，即可正式启用广告并开始获利。

## 1. 替换 Publisher ID (ca-pub-id)

您需要将项目中的占位 ID 替换为您自己的 Google AdSense 发布商 ID。

### 修改全局脚本
打开 `src/app/layout.tsx`，找到以下代码并替换：

```tsx
// src/app/layout.tsx

<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" // 替换这里
  crossOrigin="anonymous"
  strategy="lazyOnload"
/>
```

### 修改组件默认值
打开 `src/components/AdBanner.tsx`，修改 `adClient` 的默认值：

```tsx
// src/components/AdBanner.tsx

const AdBanner: React.FC<AdBannerProps> = ({
  adClient = "ca-pub-XXXXXXXXXXXXXXXX", // 替换这里
  adSlot = "XXXXXXXXXX",
  // ...
})
```

## 2. 配置广告单元 (Ad Slots)

项目中已经在关键位置预留了广告位。您需要在 AdSense 后台创建对应的“显示广告”单元，并获取它们的 **Slot ID**。

### 当前已配置的广告位
您可以根据需求在以下文件中替换 `adSlot` 的值：

| 广告位名称 | 所在文件 | 建议广告尺寸 |
| :--- | :--- | :--- |
| `intro-ad-slot` | `src/app/page.tsx` | 自适应 (Horizontal) |
| `footer-ad-slot` | `src/app/page.tsx` | 自适应 (Horizontal) |
| `quiz-bottom-ad` | `src/components/Quiz.tsx` | 自适应 (Rectangle) |
| `result-top-ad` | `src/components/Result.tsx` | 自适应 (Horizontal/Rectangle) |
| `result-bottom-ad` | `src/components/Result.tsx` | 自适应 (Horizontal) |

## 3. 开发环境预览

在开发模式下 (`npm run dev`)，广告位会显示为**灰色虚线框占位符**。这有助于您：
- 确认广告位在页面中的视觉位置。
- 检查布局是否受到广告容器的影响。
- 确保组件正确接收了 `adSlot` 参数。

## 4. 注意事项

1. **Auto Ads (自动广告)**：如果您在 AdSense 后台启用了“自动广告”，Google 可能会在页面其他位置自动插入广告。如果您只想使用手动配置的位子，请在后台关闭自动广告。
2. **部署生效**：修改 ID 后，需要重新编译并部署项目 (`npm run build`)。
3. **审核期**：如果您的域名是新申请的，AdSense 广告可能需要几天时间审核通过后才会正式显示。
4. **禁止点击**：请勿点击自己网站上的广告，这可能导致账号被封禁。

## 5. 快速检查清单
- [ ] `layout.tsx` 里的 `client` ID 已替换。
- [ ] `AdBanner.tsx` 里的 `adClient` 已替换。
- [ ] 各页面调用 `AdBanner` 时的 `adSlot` 已替换。
- [ ] 域名已在 AdSense 控制面板中添加并验证。
