const Button = ({ label, iconUrl, backgroundColor, textColor, borderColor }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${backgroundColor ? backgroundColor : 'bg-coral-red'}
        ${textColor ? textColor : 'text-white'}
        ${borderColor ? `border-${borderColor}` : 'border-coral-red'}
        rounded-full`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt=""
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
