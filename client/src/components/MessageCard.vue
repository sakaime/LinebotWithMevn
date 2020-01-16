<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="box-card__user-name">{{ message.user_name }}</span>
        <span class="box-card__date" type="text">{{ message.date }}</span>
      </div>
      <div class="box-card__item">
        <div class="box-card__content">{{ message.content }}</div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  margin: 0 auto 8px auto;
  width: 560px;
  font-size: 16px;
}

.box-card__user-name {
  float: left;
}

.box-card__date {
  float: right;
}

.box-card__content {
  width: 90%;
  text-align: left;
}
</style>