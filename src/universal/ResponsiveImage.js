import React from 'react'

const path = location.pathname.slice(0, location.pathname.lastIndexOf('/')) + "/assets/images"
const makeImageSrcSet = srcSets => srcSets.map(size => `${path}/${size.src} ${size.size}w`).join(', ')

const ResponsiveImage = props => (
    props.image.img && !!window.HTMLPictureElement ?
        <picture>
            {props.image.sources && props.image.sources.map((source, index) => (
                <source
                    key={index}
                    srcSet={source.srcset && makeImageSrcSet(source.srcset)}
                    sizes={source.sizes}
                    media={source.media} />
            ))}

            <img src={`${path}/${props.image.img.src}`}
                srcSet={props.image.img.srcset && makeImageSrcSet(props.image.img.srcset)}
                sizes={props.image.img.sizes}
                alt={props.alt || props.image.alt || props.image.img.src}
                className={props.className} />

        </picture>
        :
        <img src={`${path}/${props.image.src}`}
            alt={props.alt || props.image.alt || props.image.src}
            className={props.className} />
)

export default ResponsiveImage