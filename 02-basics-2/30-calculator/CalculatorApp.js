import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const expression = ref({
      firstOperand: 0,
      secondOperand: 0,
      operation: 'sum',
    })

    const result = computed(() => {
      switch (expression.value.operation) {
        case 'sum':
          return expression.value.firstOperand + expression.value.secondOperand;
        case 'subtract':
          return expression.value.firstOperand - expression.value.secondOperand;
        case 'multiply':
          return expression.value.firstOperand * expression.value.secondOperand;
        case 'divide':
          return expression.value.secondOperand !== 0 ? expression.value.firstOperand / expression.value.secondOperand : 'Error: Division by zero';
        default:
          return 'Error: Unknown operation';
      }
    });

    return {
      expression,
      result
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model='expression.firstOperand'/>

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="expression.operation"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="expression.operation"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="expression.operation"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="expression.operation"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model='expression.secondOperand'/>

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
