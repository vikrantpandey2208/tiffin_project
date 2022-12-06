import React from "react";
import { Navigate } from "react-router-dom";

class Solve extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userLogged: false,
    };
  }

  render() {
    const { userLogged } = this.state;

    if (goToPay) {
      return (
        <Navigate to="/cart" state={selectedTiffin} props={selectedTiffin} />
      );
    }

    return (
      <>
        {/* Tiffin carts  */}
        <Grid ml={15} mr={15} mt={5} container spacing={3}>
          {tiffins.map((product) => {
            return (
              <Grid item sm={3} key={product._id}>
                <Paper elevation={24} style={{ width: "270px" }}>
                  <Card sx={{ width: 275, height: 350 }} variant="contained">
                    <CardActionArea onClick={() => this.openDialog(product)}>
                      <CardMedia
                        component="img"
                        image={product.photo1}
                        alt="Tiffin img"
                        height="250"
                      />

                      <CardContent>
                        <Grid container>
                          <Typography
                            variant="h6"
                            style={{
                              flexGrow: 1,
                              fontSize: "20px",
                              fontWeight: "520",
                            }}
                          >
                            {product.brandName}{" "}
                          </Typography>
                          <div
                            style={{
                              backgroundColor: "green",
                              borderRadius: "8px",
                              width: "42px",
                              height: "25px",
                              textAlign: "center",
                            }}
                          >
                            <Typography
                              style={{ color: "white", fontSize: "15px" }}
                            >
                              {product.rating}{" "}
                              <StarIcon
                                size="small"
                                style={{ color: "white", fontSize: "13px" }}
                              />
                            </Typography>
                          </div>
                        </Grid>
                        <Grid container>
                          <Typography
                            variant="subtitle1"
                            style={{ flexGrow: 1 }}
                          >
                            {product.category}
                          </Typography>
                          <Typography variant="subtitle1">
                            <CurrencyRupeeIcon
                              style={{ color: "", fontSize: "13px" }}
                            />
                            {product.price}
                          </Typography>
                        </Grid>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        {/* Order Confirm or cancel Dialog */}
        <Dialog open={this.state.showDialog} onClose={this.closeDialog}>
          <DialogTitle>Confirm </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              By clicking confirm you will go to cart then payment
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleConfirm}>Confirm</Button>
            <Button onClick={this.closeDialog}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default TiffinSectionForOrder;
