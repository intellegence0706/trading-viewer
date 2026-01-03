import Image from "next/image";
import React from "react";

const NormalButton = ({
    content,
    border,
    borderRound,
    background,
    fontSize,
    fontColor,
    padding,
    prefixIcon,
    latterIcon,
    size,
    imageSize,
    hover,
    shadow,
    onClick
}) => {
  return (
    <div className={` border-1 transition cursor-pointer
        flex justify-center items-center gap-1
        ${hover ? hover : 'hover:bg-gray-800'}
        ${borderRound ? borderRound : 'rounded-sm'}
        ${border ? border : 'border-dark-gray'}
        ${background && background}
        ${fontSize ? fontSize : 'text-size-11'}
        ${fontColor ? fontColor : 'text-dark-disabled'}
        ${padding ? padding : 'p-1'}
        ${size && size}
        ${shadow && shadow}
    `} onClick={onClick}>
        {prefixIcon && <Image src={prefixIcon} alt="icon" className={`${imageSize && imageSize}`} />}
        {content}
        {latterIcon && <Image src={latterIcon} alt="icon" />}
    </div>
  );
};

export default NormalButton;