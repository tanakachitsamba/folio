export default () => {
    let letterSpacing = { letterSpacing: '0.05em' }

    let brand = {
        background: '#314FEB',
        color: 'white',
    }

    let flex = { display: 'flex' }

    return {
        main: { ...brand.background },
        textColor: { ...brand.color },

        fontColor: { ...brand.color },
        backgroundColor: { ...brand.background },

        page: {
            ...brand,
            height: '100%',
        },

        banner: {
            background: '#7BA986',
            color: 'white',
        },

        fontNormal: {
            fontFamily: 'Didot',
            ...letterSpacing,
        },
        fontBold: {
            fontFamily: 'Didot-Bold',
            ...letterSpacing,
        },
        fontItalic: {
            fontFamily: 'Didot-Italic',
            ...letterSpacing,
        },
        wrapper: {
            maxWidth: '80%',
            margin: 'auto',
        },
        flex: {
            spaceBetween: {
                ...flex,
                justifyContent: 'space-between',
            },

            centerHorizontal: {
                ...flex,
                justifyContent: 'center',
                alignItems: 'center',
            },
        },
    }
}
