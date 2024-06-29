<!DOCTYPE HTML>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <?php include($_SERVER['DOCUMENT_ROOT']."/junaid1/includes/brand-info.php"); ?>
    <title>Home | <?php echo "$brandName";?></title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <?php include($_SERVER['DOCUMENT_ROOT']."/junaid1/includes/style.php"); ?>
</head>

<body>
    <!--[if lte IE 9]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
    <![endif]-->
    <?php include($_SERVER['DOCUMENT_ROOT']."/junaid1/includes/header.php"); ?>
    <div class="banner inner" style="background-image: url(/junaid1/assets/img/bg/banner-about-us.png);">
        <div class="container h-100">
            <div class="row h-100">
                <div class="col-lg-6 align-self-center">
                    <div class="banner-content sty1">
                        <h1>About Us</h1>
                        <p><?php echo"$brandName";?> is a renowned and reliable app development firm that has empowered leading brands to elevate their digital presence.</p>
                        <div class="comp-btn aos-init aos-animate" data-aos="fade-up">
                            <a href="/contact-us.php" class="btn btn-primary">Get a Quote</a>
                            <a href="javascript:;" class="btn btn-transparent">Live Chat</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="stripe pb-0">
        <div class="container">
            <div class="top-heading text-center">
                <h3>Our Story</h3>
                <p><?php echo"$brandName";?> started by supporting US-based businesses and brands, empowering them to expand and boost revenue with advanced mobile app solutions. Since 2008, we have assisted a diverse array of clients in identifying digital strategies to excel in their industries. Our high-performance iOS and Android applications are crafted to increase your sales and set you apart from the competition.</p>
                <p>Our team of highly skilled and knowledgeable professionals is committed to delivering outstanding services, ensuring client satisfaction every time. Whether you're in the public sector or a private company, our solutions can enhance your industry standing and drive success.</p>
            </div>
        </div>
    </section>

    <section class="stripe brand-sec pt-0" data-aos="fade-up">
        <div class="container">
            <ul class="brand-logos mt-5">
                <li><img src="/junaid1/assets/img/mix/brand-1.png" alt=""></li>
                <li><img src="/junaid1/assets/img/mix/brand-2.png" alt=""></li>
                <li><img src="/junaid1/assets/img/mix/brand-3.png" alt=""></li>
                <li><img src="/junaid1/assets/img/mix/brand-4.png" alt=""></li>
                <li><img src="/junaid1/assets/img/mix/brand-5.png" alt=""></li>
                <li><img src="/junaid1/assets/img/mix/brand-6.png" alt=""></li>
                <li><img src="/junaid1/assets/img/mix/brand-7.png" alt=""></li>
            </ul>
        </div>
    </section>

    <section class="stripe why-choose-sec">
        <div class="container">
            <div class="box-style">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="blog-inner">
                            <div class="blog-slider__item">
                                <div class="blog-slider__img">
                                    <img alt="Design" class="finbyz-zoomin" src="/junaid1/assets/img/icons/our-mission.png"
                                        title="Design">
                                </div>
                                <div class="blog-slider__content">
                                    <h4>Our Mission</h4>
                                    <div class="blog-slider__text">
                                        <p>To expedite the adoption of cutting-edge technologies, empowering businesses to overcome complex challenges during process automation. Our seamless fusion of technology and creativity ignites transformational growth, propelling businesses to new heights.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="blog-inner">
                            <div class="blog-slider__item">
                                <div class="blog-slider__img">
                                    <img alt="Design" class="finbyz-zoomin" src="/junaid1/assets/img/icons/our-vision.png"
                                        title="Design">
                                </div>
                                <div class="blog-slider__content">
                                    <h4>Our Vision</h4>
                                    <div class="blog-slider__text">
                                        <p><?php echo"$brandName";?>To distinguished mobile application development agency dedicated to helping clients outshine their competitors. We ensure enhanced engagement with customers,
                                        partners, and employees, setting your business apart in the marketplace.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

	

    <?php include($_SERVER['DOCUMENT_ROOT']."/junaid1/includes/tabing.php"); ?>
	<?php include($_SERVER['DOCUMENT_ROOT']."/junaid1/includes/experience-sec.php"); ?>
    <?php include($_SERVER['DOCUMENT_ROOT']."/junaid1/includes/project-sec.php"); ?>
    <?php include($_SERVER['DOCUMENT_ROOT']."/junaid1/includes/testimonials.php"); ?>
    <?php include($_SERVER['DOCUMENT_ROOT']."/junaid1/includes/footer.php"); ?>
    <?php include($_SERVER['DOCUMENT_ROOT']."/junaid1/includes/scripts.php"); ?>
</body>

</html>