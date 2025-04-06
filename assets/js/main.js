/**
 * @param {string} url
 * @returns {object}
 */
function getIconByUrl(url) {
    if (url.includes('discord')) {
        return {icon: 'discord.svg', class: 'bg-primary'};
    } else if (url.includes('facebook')) {
        return {icon: 'facebook.svg', class: 'bg-primary'};
    } else if (url.includes('gamejolt')) {
        return {icon: 'gamejolt.svg', class: 'bg-black'};
    } else if (url.includes('play.google')) {
        return {icon: 'googleplay.svg', class: 'bg-light'};
    } else if (url.includes('instagram')) {
        return {icon: 'instagram.svg', class: 'bg-danger'};
    } else if (url.includes('steam')) {
        return {icon: 'steam.svg', class: 'bg-primary-subtle'};
    } else if (url.includes('tiktok')) {
        return {icon: 'tiktok.svg', class: 'bg-black'};
    } else if (url.includes('twitter')) {
        return {icon: 'twitter.svg', class: 'bg-info'};
    }  else if (url.includes('x.com')) {
        return {icon: 'x.svg', class: 'bg-black'};
    } else if (url.includes('youtube')) {
        return {icon: 'youtube.svg', class: 'bg-danger'};
    } else {
        return {icon: 'external.svg', class: 'bg-black'};
    }
}
