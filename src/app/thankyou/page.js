const EmailTemplate = ({ output }) => {
  return (
    <table
      role="presentation"
      cellSpacing="0"
      cellPadding="0"
      border="0"
      width="100%"
      style={{ borderSpacing: 0, borderCollapse: "collapse", backgroundColor: "#2F5E8D", color: "white", width: "" }}
    >
      <tbody>
        <tr>
          <td align="center" style={{ padding: 24 }}>
            <table
              role="presentation"
              cellSpacing="0"
              cellPadding="0"
              border="0"
              width="600"
              style={{
                borderSpacing: 0,
                borderCollapse: "collapse",
                width: "100%",
                maxWidth: "600px",
              }}
            >
              <tbody style={{}}>
                <tr>
                  <td
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "48px",
                      fontWeight: "bold",
                      padding: "16px 0",
                      textAlign: "center",
                    }}
                  >
                    <strong>Hi, {output || "Brandon"}</strong>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "24px",
                      padding: "8px 0",
                    }}
                    align="center"
                  >
                    Thanks for entering the Smash Raffle!
                  </td>
                </tr>
                <tr>
                  <td
                    align="center"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "16px",
                      width: "30em",
                      margin: "0 auto",
                    }}
                  >
                    <span>Be sure to follow us on Instagram </span>
                    <a
                      href="https://www.instagram.com/smashgolfplay/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#72BDFF", textDecoration: "none" }}
                      onMouseOver="this.style.color='#ffa500'"
                    >
                      @smashgolfplay
                    </a>
                    <span> to hear when we announce the winner!</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" style={{ padding: "16px 0" }}>
                    <table
                      role="presentation"
                      cellSpacing="0"
                      cellPadding="0"
                      border="0"
                      style={{ borderSpacing: 0, borderCollapse: "collapse" }}
                    >
                      <tbody>
                        <tr>
                          <td
                            align="center"
                            style={{
                              backgroundColor: "#3FA3FA",
                              padding: "10px 20px",
                              borderRadius: "4px",
                            }}
                          >
                            <a
                              href="https://www.instagram.com/smashgolfplay/"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                fontFamily: "Arial, sans-serif",
                                fontSize: "16px",
                                color: "white",
                                fontWeight: "bold",
                                textDecoration: "none",
                                display: "inline-block",
                              }}
                            >
                              Follow Us
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default EmailTemplate;
