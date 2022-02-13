<template>
  <div class="com-container">
    <div class="com-chart" ref="trend_ref">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chartInstance: null,
      allData: null,
      currentPage: 1,
      totalPage: 0,
      timeId: null
    }
  },
  mounted () {
    this.initChart()
    this.getData()
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed () {
    clearInterval(this.timeId)
    window.removeEventListener('resize', this.screenAdapter)
  },
  methods: {
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.trend_ref)
      const initOption = {
        color: ['#23FDEE', '#02A9FE', '#5433FE'],
        title: {
          text: '疫情趋势',
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
          boundaryGap: false,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          max: 25
        }
      }
      this.chartInstance.setOption(initOption)
      this.chartInstance.on('mouseover', () => {
        clearInterval(this.timeId)
      })
      this.chartInstance.on('mouseout', () => {
        this.startInterval()
      })
    },
    async getData () {
      const { data: ret } = await this.$http.get('trend')
      this.allData = ret
      this.totalPage = this.allData.common.day.length % 5 === 0 ? this.allData.common.day.length / 5 : this.allData.common.day.length / 5 + 1
      this.updateChart()
      this.startInterval()
    },
    updateChart () {
      const colorArr1 = [
        'rgba(35, 253, 238, 0.5)',
        'rgba(2,169, 254, 0.5)'
      ]
      const colorArr2 = [
        'rgba(35, 253, 238, 0)',
        'rgba(2,169, 254, 0)'
      ]
      const start = (this.currentPage - 1) * 5
      const end = this.currentPage * 5
      const dayArr = this.allData.common.day.slice(start, end)
      const valueArr = this.allData.trend.data
      const seriesArr = valueArr.map((item, index) => {
        return {
          name: item.type,
          type: 'line',
          data: item.data.slice(start, end),
          smooth: true,
          stack: 'trend',
          symbol: 'none',
          areaStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: colorArr1[index]
              },
              {
                offset: 1,
                color: colorArr2[index]
              }
            ])
          }
        }
      })
      const legendArr = valueArr.map(item => {
        return item.type
      })
      const dataOption = {
        xAxis: {
          data: dayArr
        },
        legend: {
          data: legendArr
        },
        series: seriesArr
      }
      this.chartInstance.setOption(dataOption)
    },
    startInterval () {
      if (this.timeId) {
        clearInterval(this.timeId)
      }
      this.timeId = setInterval(() => {
        this.currentPage++
        if (this.currentPage > this.totalPage) {
          this.currentPage = 1
        }
        this.updateChart()
      }, 3000)
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
