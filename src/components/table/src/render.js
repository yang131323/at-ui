export default {
  name: 'Cell',
  functional: true,
  props: {
    item: Object,
    column: Object,
    index: Number,
    items: Array,
    render: Function
  },
  render: (h, ctx) => {
    const params = {
      item: ctx.props.item || {},
      index: ctx.props.index
    }
    if (ctx.props.column) {
      params.column = ctx.props.column
    }
    if (ctx.props.items && ctx.props.items.length) {
      params.item.items = ctx.props.items
    }
    return ctx.props.render(h, params)
  }
}
