package com.softweb;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
//@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    @JsonProperty("idddd")
    private int id;
    @JsonProperty("firstName")
    private String firstName;
    @JsonProperty("lastName")
    private String lastName;

    public UserDto(int _id, String _firstName, String _lastName) {
        this.id = _id;
        this.firstName = _firstName;
        this.lastName = _lastName;
    }

}
