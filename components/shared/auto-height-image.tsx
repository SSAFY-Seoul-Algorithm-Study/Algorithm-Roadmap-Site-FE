import styled from 'styled-components';
import Image, { ImageProps } from 'next/image';

export const AutoHeightImageWrapper = styled.div`
  width: 0.5rem;
  & > span {
	position: unset !important;
	& .autoImage {
	  object-fit: contain !important;
	  position: relative !important;
	  height: auto !important;
	}
  }
`;

const AutoHeightImage = ({ ...props }: ImageProps): React.ReactElement => (
  <AutoHeightImageWrapper>
    <Image fill className="autoImage" {...props} />
  </AutoHeightImageWrapper>
);

export default AutoHeightImage;