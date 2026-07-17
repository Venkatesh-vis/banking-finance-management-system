const HeaderBox = ({
                       type = "title",
                       title,
                       subtext,
                       user,
                   }: HeaderBoxProps) => {
    return (
        <div className="w-full min-w-0 flex flex-col gap-2">
            <h1 className="break-words text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
                {title}

                {type === "greeting" && user && (
                    <>
                        {" "}
                        <span
                            className=" bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent break-all">
                            {user}
                        </span>
                    </>
                )}
            </h1>

            <p className="break-words text-sm leading-6 text-gray-500 sm:text-base lg:text-lg">
                {subtext}
            </p>
        </div>
    );
};

export default HeaderBox;

