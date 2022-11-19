<template>
    <div id="staticblock_endow">
        <div class="row">
            <div class="stt_icon col-lg-3 col-md-6 col-12">
                <div class="box_static_content">
                    <div class="img_top">
                        <a> <img class="img-responsive"
                                src="https://demo.fieldthemes.com/ps-fami/store/modules/ftchtmlblock/images/img1.png"
                                alt=""></a>
                    </div>
                    <div class="content_text">
                        <h4>FREE SHIPPING</h4>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
                    </div>
                </div>
            </div>
            <div class="stt_icon col-lg-3 col-md-6 col-12">
                <div class="box_static_content">
                    <div class="img_top">
                        <a> <img class="img-responsive"
                                src="https://demo.fieldthemes.com/ps-fami/store/modules/ftchtmlblock/images/img2.png"
                                alt=""></a>
                    </div>
                    <div class="content_text">
                        <h4>FREE RETURNS</h4>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
                    </div>
                </div>
            </div>
            <div class="stt_icon col-lg-3 col-md-6 col-12">
                <div class="box_static_content">
                    <div class="img_top">
                        <a> <img class="img-responsive"
                                src="https://demo.fieldthemes.com/ps-fami/store/modules/ftchtmlblock/images/img3.png"
                                alt=""></a>
                    </div>
                    <div class="content_text">
                        <h4>SUPPORT 24/7</h4>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
                    </div>
                </div>
            </div>
            <div class="stt_icon col-lg-3 col-md-6 col-12">
                <div class="box_static_content">
                    <div class="img_top">
                        <a> <img class="img-responsive"
                                src="https://demo.fieldthemes.com/ps-fami/store/modules/ftchtmlblock/images/img4.png"
                                alt=""></a>
                    </div>
                    <div class="content_text">
                        <h4>FREE EXCHANGE</h4>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="banner_home_top">
        <div class="item">
            <div class="banner_content">
                <div class="hover_banner">
                    <a href="#"> <img class="img-responsive"
                            src="https://demo.fieldthemes.com/ps-fami/store/modules/ftchtmlblock/images/img8.jpg"
                            alt=""></a>
                </div>
                <div class="text_content">
                    <h3>New Collection 2018</h3>
                    <h4>organic Design</h4>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="banner_content">
                <div class="hover_banner">
                    <a href="#"> <img class="img-responsive"
                            src="https://demo.fieldthemes.com/ps-fami/store/modules/ftchtmlblock/images/img9.jpg"
                            alt=""></a>
                </div>
                <div class="text_content">
                    <h4>organic</h4>
                    <h3>sale up to 50%off</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
#staticblock_endow {
    overflow: hidden;
    display: block;
    padding: 30px 0 30px;
}

.row {
    display: flex;
    padding: 0 200px;
}

.stt_icon {
    width: 25%;
    padding: 20px
}

.img_top {
    background-color: #2f2f2f;
    width: fit-content;
    border-radius: 20px;
    margin: auto;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
        background-color: #addc3b;
    }
}

.box_static_content {
    text-align: center;
    max-width: 230px;
}

.banner_home_top {
    display: flex;

    .item {
        width: 50%;

        .banner_content {
            position: relative;
            overflow: hidden;

            img {
                width: 100%;
            }

            .text_content {
                position: absolute;
                top: 50%;
                right: 90px;
                left: auto;
                color: #fff;
                text-transform: uppercase;
                text-align: right;
                transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                -o-transform: translateY(-50%);
                background: rgba(0, 0, 0, .48);
                font-weight: 700;
                padding: 15px 30px;

                h3 {
                    font-size: 30px;
                }

                &:hover {
                    right: 30px;
                    transition: all 0.3s ease-in-out 0s;
                }
            }
        }
    }
}
</style>