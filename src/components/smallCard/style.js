import Colors, {height, width} from '../../config/Colors';

export const container = {
  borderWidth: 1,
  borderRadius: 4,
  borderColor: '#000',
  borderBottomWidth: 0,
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 1,
  marginHorizontal: 10,
  marginTop: 5,
  backgroundColor: Colors.Primary,
  flexDirection: 'row',
  alignItems: 'center',
};
export const containerFav = {
  ...container,
  width:width-width*.54,
  height:width-width*.54
};
export const imageView = {
  height: 55,
  width: 55,
};
export const imageViewFav = {
  height: width-width*.58,
  width: width-width*.58,
};
export const favIcon = {
  position: 'absolute',
  height: 34,
  width: 34,
  left: -15,
  top: -15,
};
export const imageViewContainer = {
  justifyContent: 'center',
  alignItems: 'center',
  margin: 5,
};
export const imageViewContainerFav = {
  ...imageViewContainer,
  flex: 1,
};
export const detail = {
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '80%',
};
export const detailFav = {
  ...detail,
};
export const detailTitle = {
  fontSize: 18,
};
export const detailTitleFav = {
  ...detailTitle,
};
