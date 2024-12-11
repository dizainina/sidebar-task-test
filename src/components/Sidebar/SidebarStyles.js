import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 250px;
  transition: width 0.8s ease, background-color 0.8s ease;
  border-radius: 15px;
  border: ${(props) =>
    props.color === "dark" ? "2px solid #d0d4dc" : "1px solid #d2d8e2"};
  outline: ${(props) =>
    props.color === "dark" ? "1px solid #969799" : "3px solid #eceff6"};

  background-color: ${(props) =>
    props.color === "dark"
      ? "var(--color-sidebar-background-dark-default)"
      : "var(--color-sidebar-background-light-default)"};

  &.opened {
    width: 250px;
    .nameLogo,
    span {
      opacity: 1;
      transition: opacity 3.5s ease;
    }
    .arrow_icon {
      margin-right: -2rem;
      transition: color 0.8s ease, background-color 0.8s ease;
      color: ${(props) =>
        props.color === "dark"
          ? "var(--color-sidebar-background-dark-default)"
          : "var(--color-sidebar-background-light-default)"};
      background-color: #e2e6eb;
    }
  }
  .nameLogo {
    margin-left: 0;
    font-size: 20px;
    color: ${(props) =>
      props.color === "dark"
        ? "var(--color-text-logo-dark-default)"
        : "var(--color-text-logo-light-default)"};
  }
  &.closed {
    width: 70px;

    .nameLogo,
    span {
      opacity: 0;
      visibility: hidden;

      transition: opacity 0.5s ease;
    }
    .arrow_icon {
      margin-left: -4rem;
      transition: color 0.8s ease, background-color 0.8s ease;
      color: ${(props) =>
        props.color === "dark"
          ? "var(--color-sidebar-background-light-default)"
          : "var(--color-sidebar-background-dark-default)"};
      background-color: ${(props) =>
        props.color === "dark"
          ? "var(--color-sidebar-background-dark-default)"
          : "var(--color-sidebar-background-light-default)"};
    }
  }

  .arrow_icon {
    width: 14px;
    height: 32px;
    padding: 2px 11px;
    border-radius: 50%;
    z-index: 1000;
    transition: color 0.8s ease;
  }
  .title {
    font-weight: 300;
    &:hover {
      font-weight: 800;
    }
  }

  div {
    padding: 15px;

    img {
      height: 40px;
    }

    span {
      color: ${(props) =>
        props.color === "dark"
          ? "var(--color-text-logo-dark-default)"
          : "var(--color-text-logo-light-default)"};
      font-weight: bold;
    }
  }

  .route {
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    color: ${(props) =>
      props.color === "dark"
        ? "var(--color-text-dark-default)"
        : "var(--color-text-light-default)"};
    transition: background-color 0.2s ease, color 0.2s ease;
    &:hover {
      font-weight: bold;
      color: ${(props) =>
        props.color === "dark"
          ? "var(--color-text-dark-hover)"
          : "var(--color-text-light-hover)"};
      background-color: ${(props) =>
        props.color === "dark"
          ? "var(--color-sidebar-background-dark-hover)"
          : "var(--color-sidebar-background-light-hover)"};
      border-radius: 15px;
      transition: background-color 0.2s ease;
    }
  }
  .active {
    .title {
      color: ${(props) =>
        props.color === "dark"
          ? "var(--color-text-dark-active)"
          : "var(--color-text-light-active)"};
      font-weight: bold;
    }

    background-color: ${(props) =>
      props.color === "dark"
        ? "var(--color-button-background-dark-active)"
        : "var(--color-button-background-light-active)"};

    border-radius: 15px;
  }
  span {
    margin-left: 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Red = styled.div`
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  padding: 0 !important;
`;
export const Yellow = styled.div`
  width: 10px;
  height: 10px;
  background-color: yellow;
  border-radius: 50%;
  padding: 0 !important;
  margin: 0 6px;
`;
export const Green = styled.div`
  width: 10px;
  height: 10px;
  background-color: green;
  border-radius: 50%;
  padding: 0 !important;
`;
export const ThreeDots = styled.div`
  display: flex;
`;
