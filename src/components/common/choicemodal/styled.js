import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ $height}) => ($height===1) ? "325px" : "375px"};
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  border-radius: 40px 40px 0 0;
  background: url("/images/apply/modalback.svg") lightgray 50% / cover no-repeat;
`;

export const TouchWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ModalContent = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
`;

export const Icon24 = styled.img`
  width: 24px;
  display: flex;
  position: absolute;
  right: 24px;
  top: 24px;

  cursor: pointer;
`;

export const thinkEmoji = styled.img`
  width: 61px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.PretendardSB}
  font-size: 20px;
  margin-top: 0.75rem;
`;

export const SemiTitle = styled.div`
  ${({ theme }) => theme.fonts.PretendardR}
  font-size: 16px;
`;

export const Contents = styled.div`
  ${({ theme }) => theme.fonts.PretendardR}
  display: flex;
  text-align: center;
  font-size: 14px;
  margin: 1.5rem 0 3rem 0;
`;

export const TwoButtonWrap = styled.div`
  display: flex;
  width: 85%;
  position: absolute;
  bottom: 20px;
  justify-content: center;
  gap: 20px;
`;

export const LeftButton = styled.div`
  ${({ theme }) => theme.fonts.PretendardSB}
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  width: 45%;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 65px;
  background-color: ${({ theme }) => theme.colors.white};

  cursor: pointer;


`;

export const RightButton = styled.div`
  ${({ theme }) => theme.fonts.PretendardSB}
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  width: 45%;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 65px;
  background-color: ${({ theme }) => theme.colors.black};

  cursor: pointer;
`;