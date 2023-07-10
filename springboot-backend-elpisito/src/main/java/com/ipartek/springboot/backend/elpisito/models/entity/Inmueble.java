package com.ipartek.springboot.backend.elpisito.models.entity;

import java.io.Serializable;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="inmuebles")
public class Inmueble implements Serializable{

	private static final long serialVersionUID = 9070269006947248451L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private Long id;
	
	@ManyToOne
	@JoinColumn(name="tipo")
	private Tipo tipo;
	
	@ManyToOne
	@JoinColumn(name="poblacion")
	private Poblacion poblacion;
	
	@OneToMany(mappedBy = "inmueble")
	private Set<Imagen> imagenes;
	
	@Column
	private String via;
	
	@Column 
	private String titular; // Encabezado para inmueble
	
	@Column
	private String nombreVia;
	
	@Column 
	private String numero;
	
	@Column
	private String planta;
	
	@Column 
	private String puerta;
	
	@Column 
	private String cp;
	
	@Column 
	private String apertura;
	
	@Column 
	private String orientacion;
	
	@Column(name="superficie_util")
	private String superficieUtil;
	
	@Column(name="superficie_construida")
	private String superficieConstruida;
	
	@Column 
	private Integer precio;
	
	@Column(name="numero_habitaciones")
	private Integer nHabitaciones;
	
	@Column(name="numero_banhos")
	private Integer nBanhos;
	
	@Column
	private String descripcion;
	
	@Column(name="tipo_calefaccion")
	private String tipoCalefaccion;
	
	@Column
	private Integer amueblado; // 0 no amueblado, 1 amueblado
	
	@Column(name="numero_balcones")
	private Integer nBalcones;
	
	@Column(name="plazas_garaje")
	private Integer plazasGaraje;
	
	@Column
	private Integer piscina; // 0 no piscina, 1 piscina
	
	@Column 
	private Integer trastero; // 0 no trastero, 1 trastero
	
	@Column 
	private Integer ascensor; // 0 no ascensor, 1 ascensor
	
	@Column 
	private Integer jardin; // 0 no jardin, 1 jardin
	
	@Column 
	private Integer tendedero; // 0 no tendedero, 1 tendedero
	
	@Column 
	private Integer portada; // 0 no aparece en portada, 1 aparece en portada
	
	@Column
	private Integer activo; // 0 no activo, 1 activo
	
	
}
