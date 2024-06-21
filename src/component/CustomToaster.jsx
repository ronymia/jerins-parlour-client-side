

export default function CustomToaster({
    t,
    type,
    text,
    errors = [],
}) {
    // console.log(errors);
    return (
        <div>
            {
                (errors).length > 0
                    ? (<>
                        <h3>There is Some errors array :</h3>
                        <ul>
                            {
                                errors.map((errorMessage, index) =>
                                    <li key={`${index}`}
                                        className="text-red-900"
                                    >{errorMessage}</li>
                                )
                            }
                        </ul>
                    </>)
                    : (<>
                        <h3>There is some errors :</h3>
                        <p>{text}</p>
                    </>)
            }
        </div >
    )
};
