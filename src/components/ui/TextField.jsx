const TextField = ({ value = "", onChange, label, type = "text" }) => {
  return (
    <>
      {label && (
        <label htmlFor="input">
          <p className="text-lg font-extralight text-zinc-500 mb-1">{label}</p>
          <input
            type={type}
            value={value}
            onChange={onChange}
            className="border-1 border-zinc-300 w-full px-2 py-1 rounded-lg bg-zinc-100 font-extralight focus-visible:outline-none"
          />
        </label>
      )}
    </>
  );
};

export default TextField;
