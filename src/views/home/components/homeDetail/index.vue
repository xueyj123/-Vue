<template>
  <div class="home-detail">
    <div class="detail1 display-flex justify-between">
      <div class="detail-div"><img src="../../../../assets/images/pic1.jpg"></div>
      <div class="detail-div ">
        <div class=" "><img src="../../../../assets/images/pic5.jpg"></div>
        <div class=""><img src="../../../../assets/images/pic6.jpg"></div>
      </div>
    </div>
    <div class="detail1 ">

      <img src="../../../../assets/images/pic11.jpg">
    </div>
    <div class="detail1 ">
      <img src="../../../../assets/images/pic7.jpg">
    </div>
    <div class=" display-flex flex-wrap justify-between">
      <div class="detail-img ">
        <div>
          <img src="../../../../assets/images/pic8.jpg"></div>
        <p>红米5</p>
        <p>749起</p>
      </div>
      <div class="detail-img">
        <div>
          <img src="../../../../assets/images/pic9.jpg"></div>
        <p>红米Note5</p>
        <p>1099起</p>
      </div>
      <div class="detail-img ">
        <div>
          <img src="../../../../assets/images/pic10.jpg"></div>
        <p>红米Note 5A 标准版</p>
        <p>649起</p>
      </div>
      <div class="detail-img ">
        <div>
          <img src="../../../../assets/images/pic8.jpg"></div>
        <p>红米5 Plus</p>
        <p>949起</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeDetail",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.home-detail {
  .detail1 {
    margin-top: pxToVw(10);
    .detail-div {
      width: 49.3%;
      img{
        width: 100%;
        height: auto;
      }
    }
  }
}
.display-flex {
  .detail-img {
    width: 49.3%;
    div {
      img {
        height: auto;
      }
    }
  }
}
</style>