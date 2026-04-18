/**
 * instagram-feed.js
 * Vanilla JS version of the Instagram Feed Widget
 * Supports live fetching via Behold.so JSON Feed
 */

// =============================================================================
// CONFIGURATION
// 1. Create a free account at https://behold.so
// 2. Connect your Instagram and copy the JSON FEED URL
// 3. Paste your URL below
// =============================================================================
const BEHOLD_URL = "https://feeds.behold.so/DoY0E1eBJFluh4DecnpL"; // <--- PASTE YOUR BEHOLD JSON URL HERE

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
    if (!n) return "0";
    if (n >= 1000) return (n / 1000).toFixed(1) + "k";
    return n.toString();
}

/**
 * Maps Behold.so data format to our widget's internal structure
 */
function mapBeholdData(beholdData) {
    // Behold can return an array of posts OR an object with a 'posts' key
    const posts = Array.isArray(beholdData) ? beholdData : (beholdData.posts || []);
    
    return posts.map(post => ({
        id: post.id,
        type: post.mediaType === "VIDEO" ? "VIDEO" : "IMAGE",
        src: post.sizes?.medium?.mediaUrl || post.mediaUrl, // Use optimized medium size if available
        permalink: post.permalink,
        likes: 0, // Reactions hidden per user request
        comments: 0,
        caption: post.prunedCaption || post.caption || ""
    }));
}

const renderInstagramFeed = async (containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    let feedData = MOCK_FEED_DATA;
    let profile = {
        username: "yasserious_",
        biography: "CNC Engineer · Software Builder",
        profilePictureUrl: "", // CSS will handle the 'Y' fallback
        followersCount: "1.2k",
        followsCount: 148
    };

    // Attempt to fetch live data if URL is provided
    if (BEHOLD_URL) {
        container.innerHTML = '<div style="text-align: center; color: var(--first-color); padding: 40px; font-family: \'Outfit\', sans-serif;">Loading Live Feed...</div>';
        
        try {
            const response = await fetch(BEHOLD_URL);
            if (!response.ok) throw new Error("Failed to fetch feed");
            const rawData = await response.json();
            
            feedData = mapBeholdData(rawData).slice(0, 6);
            
            // Enrich profile if available
            if (rawData.username) {
                profile = {
                    username: rawData.username,
                    biography: rawData.biography || profile.biography,
                    profilePictureUrl: rawData.profilePictureUrl || "",
                    followersCount: formatCount(rawData.followersCount),
                    followsCount: rawData.followsCount
                };
            }
        } catch (error) {
            console.error("Instagram Feed Error:", error);
        }
    }

    container.innerHTML = `
        <div class="ig-widget-root">
            <div class="ig-noise-overlay"></div>
            <div style="height: 2px; background: linear-gradient(90deg, transparent 0%, #8B6914 20%, var(--first-color) 50%, #8B6914 80%, transparent 100%)"></div>
            
            <div class="ig-header" style="padding: 20px 24px 18px; border-bottom: 1px solid rgba(180,150,90,0.1); display: flex; align-items: center; gap: 16; flex-wrap: wrap; background: linear-gradient(180deg, rgba(180,150,90,0.04) 0%, transparent 100%);">
                <div class="ig-avatar-ring" style="width: 62px; height: 62px; display: flex; align-items: center; justify-content: center;">
                    <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--body-color); border: 2px solid var(--container-color); display: flex; align-items: center; justify-content: center; color: rgba(180,150,90,0.5); font-size: 22px; font-family: 'Outfit', sans-serif; font-weight: 600; overflow: hidden;">
                        ${profile.profilePictureUrl ? `<img src="${profile.profilePictureUrl}" style="width: 100%; height: 100%; object-fit: cover;">` : profile.username[0].toUpperCase()}
                    </div>
                </div>
                
                <div style="flex: 1; min-width: 160px;">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 3px;">
                        <span style="font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 18px; color: var(--title-color);">@${profile.username}</span>
                        <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--first-color); box-shadow: 0 0 6px var(--first-color);"></span>
                    </div>
                    <p style="font-size: 11px; color: rgba(180,150,90,0.55); letter-spacing: 0.12em; text-transform: uppercase; margin: 0;">${profile.biography}</p>
                </div>

                <div class="ig-stats" style="display: none;">
                    <div class="ig-stat">
                        <div style="font-weight: 600; font-size: 15px; color: var(--title-color);">${feedData.length}</div>
                        <div style="font-size: 10px; color: rgba(180,150,90,0.5); text-transform: uppercase;">Posts</div>
                    </div>
                    <div class="ig-stat-divider"></div>
                    <div class="ig-stat">
                        <div style="font-weight: 600; font-size: 15px; color: var(--title-color);">${profile.followersCount}</div>
                        <div style="font-size: 10px; color: rgba(180,150,90,0.5); text-transform: uppercase;">Followers</div>
                    </div>
                    <div class="ig-stat-divider"></div>
                    <div class="ig-stat">
                        <div style="font-weight: 600; font-size: 15px; color: var(--title-color);">${profile.followsCount}</div>
                        <div style="font-size: 10px; color: rgba(180,150,90,0.5); text-transform: uppercase;">Following</div>
                    </div>
                </div>

                <div style="display: flex; align-items: center; gap: 10px;">
                    <a href="https://www.instagram.com/yasserious_/" target="_blank" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background: rgba(180,150,90,0.08); border: 1px solid rgba(180,150,90,0.25); color: var(--first-color);"><i class="ri-instagram-line"></i></a>
                    <button id="ig-follow-btn" class="ig-follow-btn">Follow</button>
                </div>
            </div>

                <div class="ig-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px; padding: 16px 20px 4px;">
                ${feedData.map(post => `
                    <a href="${post.permalink}" target="_blank" class="ig-card">
                        <img src="${post.src}" alt="${post.caption}" loading="lazy">
                        <div class="ig-card__overlay">
                            <p style="font-size: 10px; color: rgba(232,213,163,0.7); text-align: center; padding: 0 10px; line-height: 1.4;">${post.caption ? (post.caption.length > 80 ? post.caption.substring(0, 77) + '...' : post.caption) : ''}</p>
                            <span style="font-size: 10px; color: var(--first-color); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 5px;">View Post</span>
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
