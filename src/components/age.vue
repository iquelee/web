<template>
  <div class="com-container">
    <div class="com-chart" ref="age_ref">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chartInstance: null,
      allData: null
    }
  },
  mounted () {
    this.initChart()
    this.getData()
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed () {
    window.removeEventListener('resize', this.screenAdapter)
  },
  methods: {
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.age_ref)
      const initOption = {
        color: ['#23FDEE', '#02A9FE', '#5433FE'],
        title: {
          text: '风险管控',
          top: '5%',
          left: 10
        },
        grid: {
          show: true,
          left: '3%',
          top: '25%',
          right: '4%',
          bottom: '1%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          left: 10,
          top: '15%',
          icon: 'rect',
          itemWidth: 15,
          itemHeight: 15,
          itemGap: 25
        },
        xAxis: {
          type: 'category',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value'
        }
      }
      this.chartInstance.setOption(initOption)
    },
    async getData () {
      const { data: ret } = await this.$http.get('age')
      this.allData = ret
      this.updateChart()
    },
    updateChart () {
      const timeArr = this.allData.common.age
      const valueArr = this.allData.risk.data
      const seriesArr = valueArr.map((item, index) => {
        return {
          name: item.type,
          type: 'bar',
          data: item.data,
          stack: 'risk',
          barWidth: '20%'
        }
      })
      const legendArr = valueArr.map(item => {
        return item.type
      })
      const dataOption = {
        xAxis: {
          data: timeArr
        },
        legend: {
          data: legendArr
        },
        series: seriesArr
      }
      this.chartInstance.setOption(dataOption)
    },
    screenAdapter () {
      const adapterOption = {}
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    }
  }
}
</script>

<style>

</style>
