import { FooterWrap, Img, In, Info, Line } from "@/styles/common/footer.styles";

const Footer = () => {
    return (
        <FooterWrap>
            <Img></Img>
            <Line></Line>
            <Info>
                <In>(주)프라닷</In>
                <In> ㅣ </In>
                <In>주소: 서울특별시 어딘가</In>
                <In>팩스: 02-113-5599</In>
                <In>고객센터: 02- 232-1121</In>
                <In>본사 대표전화: 02-232-1121</In>
                <In>가맹상담전화: 02-232-1121</In>
            </Info>
        </FooterWrap>
    );
};

export default Footer;
