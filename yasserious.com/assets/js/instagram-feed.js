/**
 * instagram-feed.js
 * Vanilla JS version of the Instagram Feed Widget
 */

const MOCK_FEED_DATA = [
    {
      id: "1",
      type: "IMAGE",
      src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
      permalink: "https://www.instagram.com/yasserious_/",
      likes: 384,
      comments: 27,
      caption: "Precision in every cut.",
    },
    {
      id: "2",
      type: "VIDEO",
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      permalink: "https://www.instagram.com/yasserious_/",
      likes: 521,
      comments: 43,
      caption: "CNC in motion.",
    },
    {
      id: "3",
      type: "IMAGE",
      src: "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=600&q=80",
      permalink: "https://www.instagram.com/yasserious_/",
      likes: 210,
      comments: 18,
      caption: "Where code meets craft.",
    },
    {
      id: "4",
      type: "VIDEO",
      src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
      permalink: "https://www.instagram.com/yasserious_/",
      likes: 673,
      comments: 59,
      caption: "Inspire & keep shining.",
    },
    {
      id: "5",
      type: "IMAGE",
      src: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&q=80",
      permalink: "https://www.instagram.com/yasserious_/",
      likes: 445,
      comments: 33,
      caption: "Industrial elegance.",
    },
    {
      id: "6",
      type: "IMAGE",
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      permalink: "https://www.instagram.com/yasserious_/",
      likes: 298,
      comments: 22,
      caption: "Every line has a purpose.",
    },
];

function formatCount(n) {
    if (n >= 1000) return (n / 1000).toFixed(1) + "k";
    return n.toString();
}

const renderInstagramFeed = (containerId, posts = MOCK_FEED_DATA) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        <div class="ig-widget-root">
            <div class="ig-noise-overlay"></div>
            <div style="height: 2px; background: linear-gradient(90deg, transparent 0%, #8B6914 20%, var(--first-color) 50%, #8B6914 80%, transparent 100%)"></div>
            
            <div class="ig-header" style="padding: 20px 24px 18px; border-bottom: 1px solid rgba(180,150,90,0.1); display: flex; align-items: center; gap: 16; flex-wrap: wrap; background: linear-gradient(180deg, rgba(180,150,90,0.04) 0%, transparent 100%);">
                <div class="ig-avatar-ring" style="width: 62px; height: 62px; display: flex; align-items: center; justify-content: center;">
                    <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--body-color); border: 2px solid var(--container-color); display: flex; align-items: center; justify-content: center; color: rgba(180,150,90,0.5); font-size: 22px; font-family: 'Outfit', sans-serif; font-weight: 600;">Y</div>
                </div>
                
                <div style="flex: 1; min-width: 160px;">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 3px;">
                        <span style="font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 18px; color: var(--title-color);">@yasserious_</span>
                        <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--first-color); box-shadow: 0 0 6px var(--first-color);"></span>
                    </div>
                    <p style="font-size: 11px; color: rgba(180,150,90,0.55); letter-spacing: 0.12em; text-transform: uppercase; margin: 0;">CNC Engineer · Software Builder</p>
                </div>

                <div class="ig-stats" style="display: flex; align-items: center; gap: 16px; margin-right: 8px;">
                    <div class="ig-stat">
                        <div style="font-weight: 600; font-size: 15px; color: var(--title-color);">${posts.length}</div>
                        <div style="font-size: 10px; color: rgba(180,150,90,0.5); text-transform: uppercase;">Posts</div>
                    </div>
                    <div class="ig-stat-divider"></div>
                    <div class="ig-stat">
                        <div style="font-weight: 600; font-size: 15px; color: var(--title-color);">1.2k</div>
                        <div style="font-size: 10px; color: rgba(180,150,90,0.5); text-transform: uppercase;">Followers</div>
                    </div>
                    <div class="ig-stat-divider"></div>
                    <div class="ig-stat">
                        <div style="font-weight: 600; font-size: 15px; color: var(--title-color);">148</div>
                        <div style="font-size: 10px; color: rgba(180,150,90,0.5); text-transform: uppercase;">Following</div>
                    </div>
                </div>

                <div style="display: flex; align-items: center; gap: 10px;">
                    <a href="https://www.instagram.com/yasserious_/" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background: rgba(180,150,90,0.08); border: 1px solid rgba(180,150,90,0.25); color: var(--first-color);"><i class="ri-instagram-line"></i></a>
                    <button id="ig-follow-btn" class="ig-follow-btn">Follow</button>
                </div>
            </div>

            <div class="ig-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px; padding: 16px 20px 4px;">
                ${posts.map(post => `
                    <a href="${post.permalink}" target="_blank" class="ig-card">
                        <img src="${post.src}" alt="${post.caption}" loading="lazy">
                        <div class="ig-card__overlay">
                            <div class="flex items-center gap-3">
                                <span class="flex items-center gap-1" style="color: var(--first-color); font-weight: 600;"><i class="ri-heart-fill"></i> ${formatCount(post.likes)}</span>
                                <span class="flex items-center gap-1" style="color: var(--first-color); font-weight: 600;"><i class="ri-chat-3-fill"></i> ${formatCount(post.comments)}</span>
                            </div>
                            <p style="font-size: 10px; color: rgba(232,213,163,0.7); text-align: center; padding: 0 10px;">${post.caption}</p>
                        </div>
                        <div class="ig-shimmer"></div>
                    </a>
                `).join('')}
            </div>

            <div style="display: flex; align-items: center; justify-content: center; padding-top: 18px; gap: 6px;">
                <a href="https://www.instagram.com/yasserious_/" target="_blank" style="font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(180,150,90,0.5); display: flex; align-items: center; gap: 6px;">
                    <span style="width: 28px; height: 1px; background: currentColor;"></span>
                    View all on Instagram
                    <span style="width: 28px; height: 1px; background: currentColor;"></span>
                </a>
            </div>
        </div>
    `;

    // Follow button logic
    const followBtn = document.getElementById('ig-follow-btn');
    if (followBtn) {
        followBtn.addEventListener('click', () => {
            followBtn.classList.toggle('followed');
            followBtn.textContent = followBtn.classList.contains('followed') ? 'Following' : 'Follow';
        });
    }
};

// Auto-initialize if the container exists
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('instagram-feed')) {
        renderInstagramFeed('instagram-feed');
    }
});
