const ContactsPage = () => {
    return (
        <>
            <h2 className='text-center mt-5 mb-4'>Our Contacts</h2>
            <table className="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th scope="col">position</th>
                    <th scope="col">First</th>
                    <th scope="col">instagram</th>
                    <th scope="col">twitter</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">Front-end dev</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">Back-end dev</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">Journalist</th>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@bird</td>
                </tr>
                </tbody>
            </table>
        </>
    );
};

export default ContactsPage;