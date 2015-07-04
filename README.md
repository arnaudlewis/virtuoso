================================= RESOLUTIONS ================================
$screen-sm-max-portrait: 320px !default;
$screen-sm-min-landscape: 321px !default;
$screen-sm-max-landscape: 767px !default;
$screen-md-min: 768px !default;
$screen-md-max: 1024px !default;
$screen-lg-min: 1025px !default;
$screen-lg-max: 1920px !default;
$screen-xl-min: 1921px !default;

$grid-columns-default: $grid-columns-lg;

/* Smartphones (landscape) ----------- */
@media only screen and (min-width : $screen-sm-min-landscape) and (max-width: $screen-sm-max-landscape) {
}

/* Smartphones (portrait) ----------- */
@media only screen and (max-width : $screen-sm-max-portrait) {
}

/* Tablets (landscape) ----------- */
@media only screen and (min-device-width : $screen-md-min) and (max-device-width : $screen-md-max) and (orientation : landscape) {
}

/* Tablets (portrait) ----------- */
@media only screen and (min-device-width : $screen-md-min) and (max-device-width : $screen-md-max) and (orientation : portrait) {
}

/* Large screens ----------- */
@media only screen  and (min-width : $screen-lg-min) and (max-width: $screen-lg-max) {
}

/* Retina screens ----------- */
@media only screen  and (min-width : $screen-xl-min) {
}