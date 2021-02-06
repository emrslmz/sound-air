const state = {
    socialMedia: [
        {
            socialName: 'Instagram',
            socialClass: [
                'fab fa-instagram',
                'text-instagram',
            ],
            socialLink: 'https://www.instagram.com/',
        },
        {
            socialName: 'Twitter',
            socialClass: [
                'fab fa-twitter',
                'text-twitter',
            ],
            socialLink: 'https://www.twitter.com/',
        },
        {
            socialName: 'Discord',
            socialClass: [
                'fab fa-discord',
                'text-discord',
            ],
            socialLink: 'https://discord.gg/E3Nv7Wpz9W',
        },
    ]
}

const getters = {
  getSocial(state) {
      return state.socialMedia;
  }
}


export default {
    state,
    getters
}