const { extractYouTubeId, convertVideo } = require('./Libs/utils');

/**
 * Download YouTube video as mp3
 * @param {string} url
 * @param {string} audioQuality
 * @returns {Promise<string>} Download URL
 */
async function downloadMp3(url, audioQuality = '128') {
    const videoId = extractYouTubeId(url);
    if (!videoId) throw new Error("Invalid YouTube URL.");
    const results = await convertVideo(videoId, 'mp3', audioQuality, '240');
    return results.url;
}

/**
 * Download YouTube video as mp4
 * @param {string} url
 * @param {string} quality
 * @returns {Promise<string>} Download URL
 */
async function downloadMp4(url, quality = '360') {
    const videoId = extractYouTubeId(url);
    if (!videoId) throw new Error("Invalid YouTube URL.");
    const vqual = quality.replace('p',''); // extract number
    const results = await convertVideo(videoId, 'mp4', '128', vqual);
    return results.url;
}

module.exports = { downloadMp3, downloadMp4 };
