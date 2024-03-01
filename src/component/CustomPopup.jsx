import Popup from "reactjs-popup";


export default function CustomPopup({
    popupOption,
    setPopupOption,
    Component,
}) {
    return (
        <Popup
            closeOnDocumentClick={false}
            lockScroll={true}
        >
            <div
                className={`relative bg-base-300 shadow-xl rounded-xl border-primary-content border-2 overflow-hidden w-[95vw] sm:w-[70vw] md:w-[70vw] lg:w-[50vw] ${popupClasses} max-h-[90vh] `}
            >
                <button
                    onClick={() =>
                        setPopupOption({
                            ...popupOption,
                            open: false,
                        })
                    }
                    className="absolute high-zindex top-3 right-3 w-9 h-9 rounded-full bg-primary-content flex justify-center items-center"
                >
                    <FiX className="text-primary text-xl" />
                </button>

                {popupOption?.title && (
                    <div className="w-full px-8 py-5 text-primary font-semibold text-2xl absolute top-0 z-50 bg-base-300">
                        {popupOption?.title}
                    </div>
                )}

                {/* Popup Component  */}
                <div className="px-5 max-h-[90vh] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-primary pt-14">
                    {Component}
                </div>
            </div>
        </Popup>
    )
}
