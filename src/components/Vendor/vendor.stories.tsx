import Vendor from '.';

export default {
  title: 'Vendor',
  component: Vendor
};

export const VendorCard = () => (
  <Vendor title="Fusion Food Hub" image="/vendors/3.png" />
);

export const VendorCardWithDiscount = () => (
  <Vendor
    title="Indreni"
    image="/vendors/2.png"
    badge
    badgeColor="danger"
    badgeTitle="15% OFF"
  />
);
