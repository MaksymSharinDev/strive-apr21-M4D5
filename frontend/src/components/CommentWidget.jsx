import faker from "faker";

const CommentDetails = (props) => {
    return (
        <div>

            <div class="container-fluid px-1 py-5 mx-auto">
                <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-10 col-12 text-center mb-5">
                        <div class="card">
                            <div class="row justify-content-left d-flex">
                                <div class="col-md-4 d-flex flex-column">
                                    <div class="rating-box">
                                        <h1 class="pt-4">4.0</h1>
                                        <p class="">out of 5</p>
                                    </div>
                                    <div><span class="fa fa-star star-active mx-1"></span> <span
                                        class="fa fa-star star-active mx-1"></span> <span
                                        class="fa fa-star star-active mx-1"></span> <span
                                        class="fa fa-star star-active mx-1"></span> <span
                                        class="fa fa-star star-inactive mx-1"></span></div>
                                </div>
                                <div class="col-md-8">
                                    <div class="rating-bar0 justify-content-center">
                                        <table class="text-left mx-auto">
                                            <tr>
                                                <td class="rating-label">Excellent</td>
                                                <td class="rating-bar">
                                                    <div class="bar-container">
                                                        <div class="bar-5"></div>
                                                    </div>
                                                </td>
                                                <td class="text-right">123</td>
                                            </tr>
                                            <tr>
                                                <td class="rating-label">Good</td>
                                                <td class="rating-bar">
                                                    <div class="bar-container">
                                                        <div class="bar-4"></div>
                                                    </div>
                                                </td>
                                                <td class="text-right">23</td>
                                            </tr>
                                            <tr>
                                                <td class="rating-label">Average</td>
                                                <td class="rating-bar">
                                                    <div class="bar-container">
                                                        <div class="bar-3"></div>
                                                    </div>
                                                </td>
                                                <td class="text-right">10</td>
                                            </tr>
                                            <tr>
                                                <td class="rating-label">Poor</td>
                                                <td class="rating-bar">
                                                    <div class="bar-container">
                                                        <div class="bar-2"></div>
                                                    </div>
                                                </td>
                                                <td class="text-right">3</td>
                                            </tr>
                                            <tr>
                                                <td class="rating-label">Terrible</td>
                                                <td class="rating-bar">
                                                    <div class="bar-container">
                                                        <div class="bar-1"></div>
                                                    </div>
                                                </td>
                                                <td class="text-right">0</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} alt="avatar"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Mike
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 11:00AM</span>
                    </div>
                    <div className="text">Eww, shit movie like Bootstrap</div>
                </div>
            </div>
        </div>
    );
};

export default CommentDetails;
