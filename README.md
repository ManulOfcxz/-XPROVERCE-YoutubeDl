# -XPROVERCE-YoutubeDl
A simple YouTube downloader for Node.js

````markdown
# @XPROVerce/YoutubeDl 🚀

A **fast, easy-to-use Node.js package** to download YouTube videos as **MP3 (audio)** or **MP4 (video)**.  
Perfect for developers building bots, apps, or automation tools with YouTube download functionality.

---

## 🌟 Features

- Download YouTube videos as MP3 (audio)
- Download YouTube videos as MP4 (video)
- Supports custom quality selection (e.g., 360p, 720p)
- Simple, promise-based API
- Works seamlessly with Node.js projects

---

## ⚡ Installation

```bash
npm install @XPROVerce/YoutubeDl
````

---

## 🎯 Usage

```javascript
const { downloadMp3, downloadMp4 } = require('@XPROVerce/YoutubeDl');

const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

(async () => {
  try {
    // Download as MP3
    const mp3Link = await downloadMp3(url);
    console.log('MP3 Download URL:', mp3Link);

    // Download as MP4 with custom quality
    const mp4Link = await downloadMp4(url, '720p');
    console.log('MP4 Download URL:', mp4Link);
  } catch (err) {
    console.error('Error:', err.message);
  }
})();
```

---

## 🛠️ API Reference

### `downloadMp3(url, audioQuality = '128')`

* **url**: `string` – The full YouTube URL.
* **audioQuality**: `string` (optional) – Bitrate for audio, default `'128'`.
* **Returns**: `Promise<string>` – Download link for the MP3 file.

### `downloadMp4(url, quality = '360')`

* **url**: `string` – The full YouTube URL.
* **quality**: `string` (optional) – Video quality (e.g., `'360p'`, `'720p'`), default `'360'`.
* **Returns**: `Promise<string>` – Download link for the MP4 file.

---

## ⚠️ Notes

* Make sure to provide a **valid YouTube URL**.
* The package uses your backend API/service to convert and fetch the video/audio.
* Recommended for Node.js v14+.

---

## 💻 Contributing

Feel free to contribute! Open an issue or submit a pull request for new features, bug fixes, or improvements.

---

## 📄 License

MIT License © **XPROVerce**
