import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'MapApp',

  setup() {
    // Реактивные переменные для хранения координат метки
    let x = ref(0)
    let y = ref(0)

    let pinStyle = ref({
      left: '0px',
      top: '0px',
    })

    /**
     * Обработчик клика по карте для установки координат метки
     * @param {MouseEvent} event
     */
    function handleClick(event) {
      x.value = event.offsetX
      y.value = event.offsetY
    }

    // Следим за X и Y для установки нового положения
    watch([x, y], ([x, y]) => {
      // Находим метку и изменяем её положение
      const pin = document.querySelector('.pin')
      pinStyle.value.left = `${x}px`
      pinStyle.value.top = `${y}px`
    })

    return {
      handleClick,
      pinStyle,
    }
  },

  template: `
    <div class="map" @click="handleClick">
      <img class="map-image" src="./map.png" alt="Map" draggable="false" />
      <span class="pin" :style="pinStyle">📍</span>
    </div>
  `,
})
