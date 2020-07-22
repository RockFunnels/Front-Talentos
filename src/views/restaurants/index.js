import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchRestaurants } from 'redux-flow/reducers/restaurant/action-creators'

const View = ({ list, count, fetch }) => {
  useEffect(() => {
    fetch() 
  }, [])

  return (
    <Wrapper>
      <span>Total de { count } encontrados!</span>
      {list.map((restaurant, item) => (
        <Restaurant key={item}>{ restaurant.name }</Restaurant>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const Restaurant = styled.div`
  width: 100%;
  font-size: 18px;
`

const mapStateToProps = state => ({
  list: state.restaurant.list,
  count: state.restaurant.count
})

const mapDispatchToProps = dispatch => ({
  fetch: () => {
    dispatch(fetchRestaurants())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(View)