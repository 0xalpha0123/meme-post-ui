import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";
import { RootState } from "../store";
import { toggleSlider } from "../store/slices/appSlice";

const useToggleSidebar = () => {
  const dispatch = useDispatch();
  const sliderOpen = useSelector((state: RootState) => state.app.sliderOpen);

  const handleTogglebar = () => {
    dispatch(toggleSlider());
  };

  return useMemo(() => {
    return {
      active: sliderOpen,
      handleTogglebar,
    };
  }, [sliderOpen]);
};

export default useToggleSidebar;
