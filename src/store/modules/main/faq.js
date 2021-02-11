const state = {
    FrequentlyAskedQuestions: [
        {
            title: 'Pricing',
            description: 'All sounds are free! You can access all the constantly renewed and updated voices at any time at no cost.',
            status: 'normal'
        },
        {
            title: '57',
            description: 'If you see this error code, there are spaces you forgot to fill in before submitting the form. Fill or mark the spaces indicated in red.',
            status: 'errorCode'
        },
    ]
}

const getters = {
    getFAQ: state => {
        return state.FrequentlyAskedQuestions;
    }
}

export default {
  state,
  getters
}