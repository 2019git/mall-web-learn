<template>
  <div class="details-params">
    <div class="details-params-rule">
      <div class="details-params-rule-key">{{paramsInfo.rule.key}}</div>
      <div class="details-params-rule-value">
        <table>
          <tr v-for="item in paramsInfo.rule.tables">
            <td class="name">{{item.name}}</td>
            <td>{{item.param1}}</td>
            <td>{{item.param2}}</td>
            <td>{{item.param3}}</td>
            <td>{{item.param4}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="details-params-info">
      <div class="details-params-info-key">{{paramsInfo.info.key}}</div>
      <div class="details-params-info-value">
        <table>
          <tr v-for="item in paramsInfo.info.sets">
            <td class="key">{{item.key}}</td>
            <td class="value">{{item.value}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsDetailsParams",
    props: {
      paramsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .details-params {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }

  .details-params-rule .details-params-rule-key {
    margin: 5px 0 10px 0px;
    font-size: 15px;
    color: black;
  }

  .details-params-rule .details-params-rule-value {
    display: flex;
  }

  .details-params-rule .details-params-rule-value table {
    flex: 1;
    width: 100%;
  }

  .details-params-rule .details-params-rule-value table tr {
    height: 42px;
    border-bottom: 2px solid #f2f5f8;
  }

  .details-params-rule .details-params-rule-value .name {
    color: #999;
  }

  .details-params-info .details-params-info-key {
    margin: 20px 0 10px 0px;
    font-size: 15px;
    color: black;
  }

  .details-params-info .details-params-info-value table {
    width: 100%;
  }

  .details-params-info .details-params-info-value table tr {
    height: 42px;
    border: 2px solid #f2f5f8;
  }

  .details-params-info .details-params-info-value .key {
    padding-left: 10px;
    color: #999;
    border-right: 2px solid #f2f5f8;
  }

  .details-params-info .details-params-info-value .value {
    padding-left: 20px;
  }
</style>
