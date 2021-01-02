export default {
  name: 'DataTableFilterRender',
  props: {
    render: {
      type: Function,
      default: undefined
    },
    active: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  render () {
    const { render, active, show } = this
    return render({
      active,
      show
    })
  }
}