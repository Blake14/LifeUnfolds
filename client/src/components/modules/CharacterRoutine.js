const CharacterRoutine = ({ colors }) => {
  const hours = Array.from(
    { length: 24 },
    (_, index) => `${index}:00 - ${index + 1}:00`
  );
  const columnHours = [hours.slice(0, 24)];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <select
        style={{
          padding: "2px",
          backgroundColor: colors.background,
          color: colors.text,
          border: `1px solid ${colors.accent}`,
          width: "100%",
          textAlign: "center",
          marginBottom: "2px",
          fontSize: 12,
          width: "100%",
        }}
      >
        <option value="">ALL MONTHS</option>
      </select>

      <select
        style={{
          padding: "2px",
          backgroundColor: colors.background,
          color: colors.text,
          border: `1px solid ${colors.accent}`,
          width: "100%",
          textAlign: "center",
          marginBottom: "2px",
          fontSize: 12,
          width: "100%",
        }}
      >
        <option value="">ALL DAYS</option>
      </select>

      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "space-between",
          padding: "10px",
          backgroundColor: colors.moduleBackground,
          color: colors.textHighlight,
          fontSize: 18,
          overflowY: "auto",
          width: "100%",
          marginTop: 10,
        }}
      >
        {columnHours.map((column, columnIndex) => (
          <div
            key={columnIndex}
            style={{
              width: "100%",
            }}
          >
            {column.map((hour, hourIndex) => (
              <div
                key={hourIndex}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: `1px solid ${colors.textHighlight}`,
                  padding: "5px",
                  width: "100%",
                }}
              >
                <span style={{ fontSize: 15, width: "60%" }}>{hour}</span>
                <select
                  style={{
                    padding: "2px",
                    backgroundColor: colors.background,
                    color: colors.text,
                    border: `1px solid ${colors.accent}`,
                    width: "40%",
                    fontSize: 15,
                  }}
                >
                  <option value="">Select</option>
                </select>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterRoutine;
