import React from 'react'
import 'bootstrap'
import $ from 'jquery'

export function withPopover(WrappedComponent) {
  class WithPopover extends React.Component {
    componentDidMount() {
      $('[data-toggle="popover"]').popover()
    }
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
  return () => <WithPopover/>
}

export function withTooltip(WrappedComponent) {
  class WithTooltip extends React.Component {
    componentDidMount() {
      $('[data-toggle="tooltip"]').tooltip()
    }
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
  return () => <WithTooltip/>
}

export function withDropdown(WrappedComponent) {
  class WithDropdown extends React.Component {
    componentDidMount() {
      $('[data-toggle="dropdown"]').dropdown()
    }
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
  return () => <WithDropdown/>
}

export function withScrollSpy(WrappedComponent) {
  class WithScrollSpy extends React.Component {
    componentDidMount() {
      $('[data-spy="scroll"]').each(function () {
        $(this).scrollspy('refresh')
      })
    }
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
  return () => <WithScrollSpy/>
}
