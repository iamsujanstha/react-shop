import styled from "styled-components"

const Rating = ({ value }: { value: number }) => {
  return (
    <StyledRating>
      {value.toFixed(1)}
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" />
    </StyledRating>
  )
}

export default Rating

const StyledRating = styled.div`
  width: fit-content;
  background: green;
  padding: 2px 6px;
  border-radius: 4px;
  color: white;
  font-size: 0.9rem;

  > img {
    width: 14px;
    height: auto;
    margin-left: 4px;
  }
`